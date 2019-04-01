class DOM {
    static _append(root, ...childs) {
        childs.map(child => {
            if (typeof child === 'object' && typeof child.render === 'function') {
                let render = child.render();
                child._renderNode = render;
                child._parentNode = root;

                child = render;
            }

            if (child instanceof Node) {
                root.appendChild(child);
            } else if (typeof child === 'string' || typeof child === 'number') {
                root.appendChild(
                    document.createTextNode(child)
                );
            }
        });
    }

    static _setRenderStorage(root, constructor, element) {
        for (const storage of DOM._renderStorage) {
            if (storage.root === root && storage.constructor === constructor) {
                return;
            }
        }

        DOM._renderStorage.push({
            root,
            constructor,
            element
        });
    }

    static render(element, root) {
        if (root instanceof HTMLElement) {
            const { constructor } = element;

            while (root.firstChild) {
                root.removeChild(root.firstChild);
            }

            DOM._setRenderStorage(root, constructor, element);
            DOM._append(root, element)
        }
        else {
            throw 'Родительский узел не является HTML элементом';
        }
    }

    static _replace(element) {
        let newChild = element.render();
        let oldChild = element._renderNode;
        let root = element._parentNode;

        root.replaceChild(newChild, oldChild);
        element._renderNode = newChild;
    }

    static _refresh(element) {
        const { constructor } = element;
        let root;

        for (const storage of DOM._renderStorage) {
            if (storage.constructor === constructor) {
                root = storage.root;
            }
        }

        if (!root) {
            DOM._replace(element);
        } else {
            DOM.render(element, root);
        }

        if (typeof element._field === 'object') {
            for (const key in element._field) {
                if (element._field.hasOwnProperty(key)) {
                    element.field = key;
                }
            }
        }
    }

    static createElement(type, props, ...childs) {
        try {
            if (typeof type !== 'string' || type.trim().length === 0) throw new Error('Неверный тип элемента\nТип элемента должен быть передан в виде строки');
            if (typeof props !== 'object') throw new Error('Свойства элемента должны быть переданы в виде объекта');

            const element = document.createElement(type);

            if (props !== null && Object.keys(props).length > 0) {
                for (let prop in props) {
                    if (props.hasOwnProperty(prop)) {
                        let value = props[prop];

                        if (prop.search('on') === 0) {
                            if (prop in element) {
                                let eventName = prop.substring(2);
                                element.addEventListener(eventName, value);
                            }
                        }
                        else if (prop === 'field') {
                            element.setAttribute('data-field', value);
                        }
                        else if (prop in element) {
                            element[prop] = value;
                        }
                    }
                }
            }

            if (childs.length > 0) {
                DOM._append(element, ...childs);
            }

            return element;
        } catch (resolve) {
            console.error(resolve);
        }
    }
}

DOM._renderStorage = [];
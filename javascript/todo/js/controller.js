class ViewTodo {
    constructor(props) {
        this._props = null;
        this.props = props;
    }

    get props() {
        return this._props;
    }

    set props(value) {
        if (typeof value === 'object') {

            if (typeof value.childElements === 'object' && !Array.isArray(value.childElements) || typeof value.childElements === 'string') {
                value.childElements = [value.childElements];
            } else if (typeof value.childElements !== 'undefined' && !Array.isArray(value.childElements)) {
                value.childElements = [];
                console.error('Неверный тип для `childElements`');
            } else if (typeof value.childElements === 'undefined') {
                value.childElements = [];
            }

            this._props = value;
        } else {
            this._props = {
                childElements: []
            };
        }
    }
}

class ControllerTodo extends ViewTodo {
    constructor(props) {
        super(props);
        this._store = {};
        this._renderNode = null;
        this._parentNode = null;
        this._field = {};
    }

    set field(value) {
        if (typeof value === 'string') {
            setTimeout(()=> {
                this._field[value] = this._renderNode.querySelector(`[data-field="${value}"]`);
            }, 0);
        }
    }

    get field() {
        return this._field;
    }

    _setStore(value, type) {
        if (typeof value === 'object') {
            for (const key in value) {
                if (value.hasOwnProperty(key)) {
                    const state = value[key];

                    let propertyFound;

                    if (type === ControllerTodo.NEW_STATE) {
                        propertyFound = ControllerTodo.PROPERTY_FOUND;
                    } else if (type === ControllerTodo.SET_STATE) {
                        propertyFound = ControllerTodo.PROPERTY_NOT_FOUND;
                    }

                    if ((key in this._store) === propertyFound) {
                        if (typeof state === 'undefined') {
                            throw new TypeError('Состояние не должно быть пустым (undefined)');
                        }

                        this._store[key] = state;
                    }
                }
            }
        } else {
            throw 'Состояние должно быть передано в виде объекта';
        }
    }

    set state(value) {
        this._setStore(value, ControllerTodo.SET_STATE);
    }

    get state() {
        return this._store;
    }

    newState(value) {
        this._setStore(value, ControllerTodo.NEW_STATE);
        DOM._refresh(this);
    }
}

ControllerTodo.NEW_STATE = 1;
ControllerTodo.SET_STATE = 2;
ControllerTodo.PROPERTY_FOUND = true;
ControllerTodo.PROPERTY_NOT_FOUND = false;

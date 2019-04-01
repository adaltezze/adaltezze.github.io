class Status extends ViewTodo {
    constructor(props) {
        super(props);
    }

    render() {
        let total = this.props.data.length;
        let completed = this.props.data.filter(({ completed }) => completed).length;
        let notCompleted = total - completed;

        return DOM.createElement('ul', { className: 'col-auto mb-0 text-right', type: 'none' },
            DOM.createElement('li', null,
                DOM.createElement('strong', { className: 'mr-2' }, 'Всего задач:'),
                DOM.createElement('span', { className: 'text-light' }, total)
            ),
            DOM.createElement('li', null,
                DOM.createElement('strong', { className: 'mr-2' }, 'Выполненных задач:'),
                DOM.createElement('span', { className: 'text-light' }, completed)
            ),
            DOM.createElement('li', null,
                DOM.createElement('strong', { className: 'mr-2' }, 'Невыполненных задач:'),
                DOM.createElement('span', { className: 'text-light' }, notCompleted)
            ),
        );
    }
}

class Header extends ViewTodo {
    constructor(props) {
        super(props);
    }

    render() {
        return DOM.createElement('header', { className: 'card-header bg-dark text-white' },
            DOM.createElement('div', { className: 'row justify-content-center align-items-center' },
                new Status({ data: this.props.data }),
                DOM.createElement('h1', { className: 'col mb-0 text-center' }, 'Todo')
            )
        );
    }
}

class Section extends ViewTodo {
    constructor(props) {
        super(props);
    }

    render() {
        return DOM.createElement('section', { className: 'card-body', ...this.props }, ...this.props.childElements);
    }
}

class Button extends ViewTodo {
    constructor(props) {
        super(props);
    }

    render() {
        return DOM.createElement('button', {
            className: `btn p-0 m-1 bg-transparent${this.props.show ? ' show' : ''}`,
            onclick: this.props.onChange,
            ...this.props
        },
            this.props.icon && DOM.createElement('span', { className: this.props.icon }),
            ...this.props.childElements
        );
    }
}

class Input extends ViewTodo {
    constructor(props) {
        super(props);
    }

    render() {
        return DOM.createElement('input', {
            className: 'form-control h-100',
            ...this.props
        });
    }
}

class Todo extends ControllerTodo {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };

        this.field = 'title';
        this.handleEditModeChange = this.handleEditModeChange.bind(this);
    }

    handleEditModeChange() {
        this.newState({ editMode: !this.state.editMode });
    }

    render() {
        return DOM.createElement('div', { className: `todo ${this.props.completed ? 'completed ' : ''}card p-2 shadow-sm` },
            DOM.createElement('div', { className: 'd-flex align-items-center' },
                !this.state.editMode && new Button({
                    type: 'button',
                    icon: `far fa${this.props.completed ? '-check' : ''}-square`,
                    onChange: () => this.props.onStatusChange(this.props.key)
                }),

                !this.state.editMode && DOM.createElement('div', { className: 'todo-text' },
                    this.props.title,
                ),

                this.state.editMode && DOM.createElement('div', { className: 'todo-edit' },
                    new Input({
                        type: 'text',
                        placeholder: 'Редактировать',
                        value: this.props.title,
                        field: 'title'
                    })
                ),

                DOM.createElement('div', { className: 'todo-buttons' },
                    !this.state.editMode && new Button({
                        type: 'button',
                        icon: 'fas fa-trash-alt',
                        onChange: () => this.props.onDelete(this.props.key),
                        title: 'Удалить'
                    }),
                    new Button({
                        type: 'button',
                        icon: 'fas fa-edit',
                        onChange: () => {
                            this.state.editMode && this.props.onTitleChange(this.props.key, this.field.title.value);
                            this.handleEditModeChange();
                        },
                        disabled: this.props.completed,
                        show: this.state.editMode,
                        title: 'Редактировать'
                    })
                )
            )
        );
    }
}

class Form extends ControllerTodo {
    constructor(props) {
        super(props);
        this.field = 'title';
    }

    render() {
        return DOM.createElement('form', {
            className: 'row',
            onsubmit: (event) => {
                event.preventDefault();
                this.props.onAdd(this.field.title.value);
            }
        },
            DOM.createElement('div', { className: 'col' },
                new Input({
                    type: 'text',
                    placeholder: 'Заголовок задачи',
                    field: 'title'
                })
            ),
            DOM.createElement('div', { className: 'col-auto' },
                new Button({
                    type: 'submit',
                    className: 'btn btn-light',
                    childElements: 'Добавить'
                })
            )
        )
    }
}


class Footer extends ViewTodo {
    constructor(props) {
        super(props);
    }

    render() {
        return DOM.createElement('footer', { className: 'card-body bg-dark' }, ...this.props.childElements);
    }
}

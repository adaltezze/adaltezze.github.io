class App extends ControllerTodo {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleTitleChange(key, title) {
        let data = this.state.data.map((todo, index) => {
            if (index === key) {
                if (title.trim().length > 0 && title !== todo.title) {
                    todo.title = title;
                }
            }

            return todo;
        });

        this.newState({ data });
    }

    handleStatusChange(key) {
        let data = this.state.data.map((todo, index) => {
            if (index === key) {
                todo.completed = !todo.completed;
            }

            return todo
        });

        this.newState({ data });
    }

    handleDelete(key) {
        let data = this.state.data.filter((todo, index) => index !== key);
        this.newState({ data });
    }

    handleAdd(title) {
        if (typeof title === 'string' && title.trim().length > 0) {
            let data = this.state.data;
            data.push({
                title,
                completed: false
            });

            this.newState({ data });
        }
    }

    render() {
        return DOM.createElement('div', { className: 'card shadow' },
            new Header({ data: this.state.data }),
            new Section({
                childElements: this.state.data.map(({ title, completed }, key) => {
                    return new Todo({
                        title,
                        completed,
                        key,
                        onStatusChange: this.handleStatusChange,
                        onDelete: this.handleDelete,
                        onTitleChange: this.handleTitleChange
                    });
                })
            }),
            new Footer({
                childElements: new Form({
                    onAdd: this.handleAdd
                })
            })
        );
    }
}

DOM.render(new App({ data: new ModelTodo }), document.querySelector('#root'));
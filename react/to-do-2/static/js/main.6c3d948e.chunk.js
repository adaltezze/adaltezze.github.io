(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports=[{id:0,label:"Learn JavaScript",done:!0,important:!1},{id:1,label:"Learn React",done:!1,important:!0},{id:2,label:"Learn Node.js",done:!1,important:!1}]},19:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},26:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(11),r=a.n(l),s=a(7),c=a(18),i=a(12),d=a(1),m=a(2),u=a(4),h=a(3),p=a(5);var g=function(e){var t=e.todos,a=t.length,n=t.filter(function(e){return e.done}).length,l=a-n;return o.a.createElement("header",{className:"card-header d-flex"},o.a.createElement("h1",{className:"card-title m-0"},"To-do"),o.a.createElement("ul",{className:"mb-0 ml-auto list-group list-group-horizontal text-right"},o.a.createElement("li",{className:"list-group-item d-flex align-items-center"},o.a.createElement("strong",{className:"mr-2"},"All:")," ",a),o.a.createElement("li",{className:"list-group-item d-flex align-items-center"},o.a.createElement("strong",{className:"mr-2"},"Done:")," ",n),o.a.createElement("li",{className:"list-group-item d-flex align-items-center"},o.a.createElement("strong",{className:"mr-2"},"More:")," ",l)))},f=a(9),b=a(6),v=a.n(b);a(25);var E=function(e){var t=e.className,a=Object(f.a)(e,["className"]);return o.a.createElement("input",Object.assign({type:"text",className:v()("input form-control border-light btn btn-outline-light w-auto flex-grow-1 bg-transparent text-white",Object(s.a)({},t,!!t))},a))},T=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},a.handleChange=function(e){var t=e.target.value;a.props.onSearchTodo(t),a.setState({term:t})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(E,{value:this.state.term,onChange:this.handleChange,placeholder:"Search"})}}]),t}(n.Component);var w=function(e){return o.a.createElement("button",Object.assign({type:e.type?e.type:"button",className:"btn"},e))},N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{status:a.props.status.ALL,label:"All"},{status:a.props.status.IMPORTANT,label:"Important"},{status:a.props.status.ACTIVE,label:"Active"},{status:a.props.status.DONE,label:"Done"}],a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.currentStatus;return o.a.createElement("div",{className:"btn-group"},this.buttons.map(function(a){var n=a.status,l=a.label;return o.a.createElement(w,{onClick:function(){return e.props.onFilterTodo(n)},className:v()("btn",{"btn-light":n===t,"btn-outline-light":n!==t}),key:n},l)}))}}]),t}(n.Component),C=(a(26),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={editMode:!1,label:a.props.label},a.handleSubmit=function(e){e.preventDefault(),a.handleToggleEditMode();var t=a.state.label.trim();t&&t!==a.props.label?a.props.onLabelChange(a.props.id,a.state.label):a.setState({label:a.props.label})},a.handleChange=function(e){var t=e.target.value;a.setState({label:t})},a.handleToggleEditMode=function(){a.setState(function(e){return{editMode:!e.editMode}})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-list-item p-3 w-100"},this.state.editMode?this.renderEditForm:this.renderDisplay)}},{key:"renderDisplay",get:function(){var e=this.props,t=e.label,a=e.important,n=e.done,l=e.onDelete,r=e.onToggleImportant,s=e.onToggleDone;return o.a.createElement("div",{className:"d-flex align-items-start"},o.a.createElement("span",{onClick:s,className:v()("todo-list-item--label d-flex align-items-start",{"text-warning todo-list-item--important":a,"todo-list-item--done":n})},o.a.createElement(w,{className:"btn p-0 shadow-none"},o.a.createElement("svg",{className:"todo-list-item--icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n?o.a.createElement("path",{fill:"currentColor",d:"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"}):o.a.createElement("path",{fill:"currentColor",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"}))),o.a.createElement("span",{className:"px-3"},t)),o.a.createElement("div",{className:"ml-auto btn-group"},o.a.createElement(w,{title:"Delete to-do",onClick:l,className:"btn p-0 text-white mr-3 shadow-none"},o.a.createElement("svg",{className:"todo-list-item--icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"currentColor",d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"}))),o.a.createElement(w,{title:"Change label",onClick:this.handleToggleEditMode,className:"btn p-0 text-white mr-3 shadow-none"},o.a.createElement("svg",{className:"todo-list-item--icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},o.a.createElement("path",{fill:"currentColor",d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}))),o.a.createElement(w,{title:"Important to-do",onClick:r,className:v()("btn p-0 shadow-none",{"text-white":!a,"text-warning":a})},o.a.createElement("svg",{className:"todo-list-item--icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},a?o.a.createElement("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}):o.a.createElement("path",{fill:"currentColor",d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"})))))}},{key:"renderEditForm",get:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"h-100 flex-grow-1 d-flex"},o.a.createElement(E,{value:this.state.label,onChange:this.handleChange,placeholder:"Change label"}),o.a.createElement(w,{type:"submit",className:"btn btn-light"},o.a.createElement("svg",{className:"todo-list-item--icon todo-list-item--icon_save",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"}))))}}]),t}(n.Component)),O=a(16),x=a.n(O);a(40);var y=function(e){var t=e.todos,a=e.onDeleteTodo,n=e.onToggleImportantTodo,l=e.onToggleDoneTodo,r=e.onLabelChange;return o.a.createElement("div",{className:"todo-list card-body"},o.a.createElement(x.a,{component:"ul",transitionName:"todo-list--slide",transitionEnterTimeout:300,transitionLeaveTimeout:300,transitionAppear:!0,transitionAppearTimeout:1e3,className:"list-group"},t.length?t.map(function(e){var t=e.id,s=Object(f.a)(e,["id"]);return o.a.createElement("li",{className:"border border-light d-flex align-items-center list-group-item p-0 my-1 shadow",key:t},o.a.createElement(C,Object.assign({id:t,onToggleDone:function(){return l(t)},onToggleImportant:function(){return n(t)},onDelete:function(){return a(t)},onLabelChange:r},s)))}):o.a.createElement("li",{className:"list-group-item text-center text-muted"},"No to-dos")))},L=(a(41),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},a.handleFormSubmit=function(e){e.preventDefault(),a.state.label.trim()&&(a.props.onAddTodo(a.state.label),a.setState({label:""}))},a.handleLabelChange=function(e){var t=e.target.value;a.setState({label:t})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.label;return o.a.createElement("footer",{className:"card-footer"},o.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"d-flex"},o.a.createElement(E,{onChange:this.handleLabelChange,value:e,placeholder:"What needs to be done"}),o.a.createElement(w,{type:"submit",className:"btn btn-light"},"Add todo")))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).maxId=100,a.state={todos:a.props.initialData,term:"",filter:t.status.ALL},a.handleLabelChange=function(e,t){a.setState(function(a){return{todos:a.todos.map(function(a){return a.id===e?Object(i.a)({},a,{label:t}):a})}})},a.handleFilterTodo=function(e){a.setState({filter:e})},a.handleSearchTodo=function(e){a.setState({term:e})},a.handleToggleDoneTodo=function(e){a.setState(function(t){return{todos:a.toggleTodosProperty(t.todos,e,"done")}})},a.handleToggleImportantTodo=function(e){a.setState(function(t){return{todos:a.toggleTodosProperty(t.todos,e,"important")}})},a.handleDeleteTodo=function(e){a.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e?t:null})}})},a.handleAddTodo=function(e){var t={label:e,id:a.id,important:!1,done:!1};a.setState(function(e){return{todos:[].concat(Object(c.a)(e.todos),[t])}})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"filterTodo",value:function(e,a){switch(a){case t.status.ALL:return e;case t.status.ACTIVE:return e.filter(function(e){return!e.done});case t.status.DONE:return e.filter(function(e){return e.done});case t.status.IMPORTANT:return e.filter(function(e){return e.important});default:return e}}},{key:"searchTodo",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().search(t.toLowerCase())>-1?e:null})}},{key:"toggleTodosProperty",value:function(e,t,a){return e.map(function(e){return e.id===t?Object(i.a)({},e,Object(s.a)({},a,!e[a])):e})}},{key:"render",value:function(){var e=this.state,a=e.todos,n=e.term,l=e.filter,r=this.filterTodo(this.searchTodo(a,n),l);return o.a.createElement("div",{className:"card shadow"},o.a.createElement(g,{todos:a}),o.a.createElement("div",{className:"card-header m-0 d-flex"},o.a.createElement(T,{onSearchTodo:this.handleSearchTodo}),o.a.createElement(N,{onFilterTodo:this.handleFilterTodo,currentStatus:this.state.filter,status:t.status})),o.a.createElement(y,{onLabelChange:this.handleLabelChange,onToggleDoneTodo:this.handleToggleDoneTodo,onToggleImportantTodo:this.handleToggleImportantTodo,onDeleteTodo:this.handleDeleteTodo,todos:r}),o.a.createElement(L,{onAddTodo:this.handleAddTodo}))}},{key:"id",get:function(){return this.maxId++}}]),t}(n.Component);j.status={ALL:"all",ACTIVE:"active",DONE:"done",IMPORTANT:"important"};var A=j,S=a(17);a(42),a(43);r.a.render(o.a.createElement(A,{initialData:S}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.6c3d948e.chunk.js.map
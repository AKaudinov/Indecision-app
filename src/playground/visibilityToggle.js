const appRoot = document.querySelector('#app');

let app = {
  hidden: true,
  details: 'These are the details of the app that are now visible'
};

const onToggleDetails = () => {
    app.hidden = !app.hidden; //make hidden property not what it was before
    renderVisibilityTemplate();
    console.log(app);
};

function renderVisibilityTemplate() {
    const template = (
        <div id='Vsibility_Template'>
            <h1>Visibility Toggle</h1>

            <button type='button' onClick={onToggleDetails}>{app.hidden ? 'Show details' : 'Hide details'}</button>
            {!app.hidden && <p>{app.details}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderVisibilityTemplate();

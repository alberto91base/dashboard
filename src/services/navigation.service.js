import history from '@router/history';

// pasa a la url que le indiques pero mantine las rutas anteriores por donde paso
function navigate(routeName) {
    history.push(routeName);
}

// quita la anterior y la sustituye por la nueva
function replace(routeName) {
    history.replace(routeName);
}

export default { navigate, replace };


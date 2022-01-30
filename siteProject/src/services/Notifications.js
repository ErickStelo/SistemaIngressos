import AWN from "awesome-notifications"
let notifier = new AWN({
    icons: {
        enabled: true,
        // prefix: "<i class='fas fa fa-fw fa"
    },
    durations: {
        global: 4000
    },
    labels: {
        alert: 'Ops!',
        success: 'Sucesso!',
        warning: 'Atenção!',
        info: 'Informação',
        tip: 'Aviso',
        confirm: 'Confirmação necessária',
        confirmOK: 'Ok',
        confirmCancel: 'Cancelar'
    },
    position: 'top-right'
})

/**
 * @name notify
 * @description Exibe notificações para o usuario.
 * @param {string} type - Tipo da notificacao. Tipos disponiveis Success, Info, Alert ou Error, Warning e Tip
 * @param {string} message - Mensagem da notificação
 * 
 */
 function addnotify(type = 'info', message = '') {
    switch (type) {
        case 'success':
            notifier.success(`${message}`)
            break;
        case 'alert':
            notifier.alert(`${message}`)
            break;
        case 'error':
            notifier.alert(`${message}`)
            break;
        case 'warning':
            notifier.warning(`${message}`)
            break;
        case 'info':
            notifier.info(`${message}`)
            break;
        case 'tip':
            notifier.tip(`${message}`)
            break;
        default:
            break;
    }
}

function responseNotifications(response) {
    var notifications = [];
    if (response.data && (response.data && response.data.notifications != undefined)) {
        notifications = response.data.notifications;
    }else if(response.response && (response.response.data && response.response.data.notifications)){
        notifications = response.response.data.notifications;
    }

    notifications.forEach(notify => {
        addnotify(notify.type, notify.message)
    });
}



export {responseNotifications, addnotify}
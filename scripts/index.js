function on_click() {
    // var click = new Audio();
    // click.src = './resources/audio/click.fsb';
    // click.play();
}

function open_settings() {
    document.getElementById('header-text').textContent = 'General';
    document.getElementById('info').style.display = 'none';
    document.getElementById('modules').style.display = 'grid';
    //document.getElementById('menu-container').replaceWith('test');
    //document.body.innerHTML = '<button class="minecraft-button">Test</button>';
}

function open_info() {
    document.getElementById('header-text').textContent = 'Info';
    document.getElementById('info').style.display = 'flex';
    document.getElementById('modules').style.display = 'none';
    console.log(document.getElementById('controller-keystokes'));
}

function upload() {
    var imported_config = document.getElementById('config-import');
    imported_config.click();
}

function download() {
    const config = {
        "namespace": "con", "f@i.g": {
            "$controller_keystrokes": document.getElementById('controller_keystrokes').checked,
            "$fps_counter": document.getElementById('fps_counter').checked,
            "$force_coordinates": document.getElementById('force_coordinates').checked,
            "$direction_hud": document.getElementById('direction_hud').checked,
            "$potion_counter": document.getElementById('potion_counter').checked,
            "$mainhand_slot": document.getElementById('mainhand_slot').checked,
            "$debug_screen": document.getElementById('debug_screen').checked,
            "$server_display": document.getElementById('server_display').checked,
            "$lightener": document.getElementById('lightener').checked,
            "$list": document.getElementById('list').checked,
            "$paperdoll": document.getElementById('paperdoll').checked,
            "$chat": document.getElementById('chat').checked,
        }
    }

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(config)));
    element.setAttribute('download', 'config.json');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

var import_config = document.getElementById('config-import');
import_config.addEventListener('change', (event) => {
    var file = event.target.files[0];
    console.log(file);
})

var current_mode = screen.orientation;

console.log(current_mode.type);

screen.orientation.lock('landscape-primary');
//alert('Please rotate your device to landscape mode.');

const config = {
    "namespace": "con", "f@i.g": {
        "$controller_keystrokes": false,
        "$fps_counter": false,
        "$force_coordinates": true,
        "$direction_hud": true,
        "$armor_hud": false,
        "$potion_counter": false,
        "$day_counter": false,
        "$offhand_slot": false,
        "$mainhand_slot": true,
        "$debug_screen": false,
        "$server_display": false,
        "$lightener": true,
        "$mobile_utilities": false,
        "$hive_utilities": false,
        "$list": false,
        "$chunk_indicator": true,
        "$paperdoll": true,
        "$chat": true,
    }
}

function open_settings() {
    document.getElelmentById('export-btn').style.visibility = 'hidden';
}

function download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(config)));
    element.setAttribute('download', 'config.json');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

var current_mode = screen.orientation;

console.log(current_mode.type);

screen.orientation.lock('landscape-primary');

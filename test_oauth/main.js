

function main(input_path)

{

document.write('input_path   '+ input_path+  '<br/>' );

get_oauth();


var obj_event=get_event(input_path );

document.write('obj_event.events[0].node ' + obj_event.events[0].node+ '<br/>');

document.write('obj_event.events[0].description.commits[0].description ' + obj_event.events[0].description.commits[0].description+ '<br/>');




}
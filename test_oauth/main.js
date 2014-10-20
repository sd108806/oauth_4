

function main()

{

get_oauth();



var obj_event=new Object();
get_event( obj_event );

document.write('obj_event.events[0].node  ' + obj_event.events[0].node+ '<br/>');

document.write('obj_event.events[0].description.commits[0].description ' + obj_event.events[0].description.commits[0].description+ '<br/>');


}
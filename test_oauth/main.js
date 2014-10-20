

function main()

{

get_oauth();


/*
var std1= test_jsonform( );

document.write('std1.id ' + std1.id +'<br/>'+'<br/>');

document.write('std1.name ' + std1.name +'<br/>'+'<br/>');
*/





var obj_event=get_event( );

document.write('obj_event.events[0].node ' + obj_event.events[0].node+ '<br/>');

document.write('obj_event.events[0].description.commits[0].description ' + obj_event.events[0].description.commits[0].description+ '<br/>');




}
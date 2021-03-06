stepcarousel.setup({
									galleryid: 'mygallery', //id of carousel DIV
									beltclass: 'belt', //class of inner "belt" DIV containing all the panel DIVs
									panelclass: 'panel', //class of panel DIVs each holding content
									autostep: {enable:true, moveby:1, pause:3000},
									panelbehavior: {speed:500, wraparound:false, persist:true},
									defaultbuttons: {enable: true, moveby: 1, leftnav: ['images/left_arrow.png', -70, 40], rightnav:['images/right_arrow.png', 4, 40]},
									statusvars: ['statusA', 'statusB', 'statusC'], //register 3 variables that contain current panel 									(start), current panel (last), and total panels
									contenttype: ['inline'] //content setting ['inline'] or ['external', 'path_to_external_file']
								})// JavaScript Document
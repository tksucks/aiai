function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup({
		backgroundColor: "blue"
	});
	
	var view = Ti.UI.createView({
		width: 150,
		height: 150,
		top:180 
	});
	var view2 = Ti.UI.createView();
	
	// ラベルを作る
	var label = Ti.UI.createLabel({
		text: "Hello World" ,
		height: 12,
		width: 150, 
		top: 120,
		color: "red"
	});
	// ボタンをつくる
	var button = Ti.UI.createButton({
		title: "push me!",
		top: 100,
		width: 100,
		height: 32
	});
	var alert = Ti.UI.createAlertDialog({
		title: "delete?",
		message: "Are you sure?",
		buttonNames: ["OK","Cancel","Help"],
		cancel: 1
	});
	alert.addEventListener("click", function(e){
		Ti.API.info(e.index);
	});
	button.addEventListener("click",function(e){
		alert.show();
	});

	//create app tabs
	var win1 = new Window(L('home')),
		win2 = new Window(L('settings'));
	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.add(view);
	win1.containingTab = tab1;
	win2.add(view2);
	view.add(label);
	view.add(button);
	
	
	var tab2 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var ebisu = Ti.Map.createAnnotation({
		latitude: 35.645,
		longitude: 139.71,
		title: "Ebisu",
		animate: true
	});
	var map = Ti.Map.createView({
		mapType: Ti.Map.STANDARD_TYPE,
		region: {latitude: 35.645, longitutde: 139.71, latitudeDelta:0.01, longitudeDelta:0.01},
		animate: true,
		regionFit: true,
		width: 300,
		height:100
	});
	var tf = Ti.UI.createTextField({
		color: "#333",
		hintText: "name",
		height: 35,
		top: 310,
		left: 10,
		width: 250,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	var sbmbutton = Ti.UI.createButton({
		title: "Submit!",
		top:340,
		left: 10,
		width:100,
		height: 40
	});
	sbmbutton.addEventListener("click",function(e){
		Ti.API.info(tf.getValue());
	});
	view2.add(tf);
	view2.add(sbmbutton);
	
	view2.add(map);
	
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
};

module.exports = ApplicationTabGroup;

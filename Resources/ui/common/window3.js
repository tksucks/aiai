function Window3(title){
	
	var win = Ti.UI.createWindow({
		title: title
	});
	
	// base view 
	var view = Ti.UI.createView({
		backgroundImage: '/images/bg_sample.png'
	});

	// top view
	var view_top = Ti.UI.createView({
		height: '35%',
		width: 'auto',
		fill: false,
		top: 0
	});

	var view_top_back = Ti.UI.createView({
		backgroundColor: '#dcdcdc',
		opacity: 0.5,
		height: '90%',
		width: '80%',
		fill: false,
	});
	
	var icon_image = Ti.UI.createImageView({
		image: '/images/icon_umbrella.png'
	});

	// bottom view
	var view_bottom = Ti.UI.createView({
		height: '65%',
		width: 'auto',
	  	fill: false,
		bottom: 0
	});
	
	var view_bottom_back = Ti.UI.createView({
	 	backgroundColor: '#dcdcdc',
	 	opacity: 0.5
	});

	var view_list = Ti.UI.createView({
		height: '90%',
		width: '80%',
		fill: false,
		// このなかに、リストビューを埋め込む
		// それぞれのユーザ情報を取得して表示
	});

	var users = [
					{text:'user1', per: '50%'},
					{text:'user2', per: '20%'},
					{text:'user3', per: '70%'},
					{text:'user4', per: '50%'},
					{text:'user5', per: '20%'},
					{text:'user6', per: '60%'},
					{text:'user7', per: '10%'}
				];//仮のデータです	
	var data = [];

	for (var i=0;i<users.length;i++) {
    	var user = users[i];
    	var row = Ti.UI.createTableViewRow({
    		height: 80
    	});
    	var nameLabel = Ti.UI.createLabel({
    		font: { fontSize:30 },
    		color: '#fff',
    		top: 0
    	});
    	var perLabel = Ti.UI.createLabel({
    		font: { fontSize:25 },
	    	color: '#fff',
    		bottom: 0
    	});
    	nameLabel.text = user.text;
    	perLabel.text = user.per;
    	row.add(nameLabel);
    	row.add(perLabel);
    	data.push(row);
	}	
	
	var user_list = Ti.UI.createTableView({
		data: data
	});

	user_list.addEventListener('click', function(e){
		var Prof = require('profile');
		var prof = new Prof('user');
		//Ti.UI.currentTab.open(prof,{animated:true});
		prof.open();
	});
	view_list.add(view_bottom_back);
	view_list.add(user_list);

	view_top.add(view_top_back);
	view_top.add(icon_image);
	view_bottom.add(view_list);

	view.add(view_top);
	view.add(view_bottom);

	win.add(view);

	return win;
}

module.exports = Window3;
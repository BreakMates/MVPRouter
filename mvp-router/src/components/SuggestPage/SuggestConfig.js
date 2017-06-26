import React from 'react';
import FaceIcon from 'material-ui-icons/Face';
import PermContactCalendar from 'material-ui-icons/PermContactCalendar';
import TagFaces from 'material-ui-icons/TagFaces';

var config = {
	id: "SUG-1",
	hook: {
		title: "Rediscover your free time",
		text: "Use BreakMates to find new things to do with your friends",
		button: "Learn More"
	},
	signuphook: {
		title: "Be the first to Rediscover your free time",
		text: ""
	},
	register: {
		title: "Register to our mailing list",
		subtitle: "We'll notify you when we release our first beta",
		hint: "Email Address",
		button: "Signup for beta"
	},
	selling: {
		points: [
			{
				icon: <FaceIcon/>,
				hook: "Face to face",
				text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
			},
			{
				icon: <TagFaces/>,
				hook: "Easy to use",
				text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
			},
			{
				icon: <PermContactCalendar/>,
				hook: "Synced Calendar",
				text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
			}
		]
	}
}

export default config
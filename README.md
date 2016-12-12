# A simple message app using reactjs, redux, and firebase.


###Getting Started###
[1.] Clone this repo. <br />
[2.] Add firebase project credentials. <br />
[3.] Install dependencies. <br />
[4.] Start Webpack. <br />

Use the following git+npm commands:

```
  > git clone https://github.com/chrisVillanueva/react-redux-firebase-message-example.git
  > cd react-redux-firebase-message-example
  [ update config settings @ '/client/settings.js' with your firebase project info ]
  > npm install
  > npm start
```
<br />


###Firebase###
To find your firebase web settings:

[1.] Log into Firebase console. <br />
[2.] Select your firebase project. <br />
[3.] Go to Overview -> Project Settings. <br />
[4.] Click on "Add Firebase to your web app". <br />
[5.] Find <b>'var config'</b> object in the settings modal <br />
     and  c/p into <b>'firebaseConfig'</b> @ ``` '/client/settings.js' ```

<br />

####Credits and Acknowledgements#####
My firebase example is based on knowledge shared by
<b>Stephen Grider</b> and <b>Chris Esplin</b>.

I used Stephen's "Simple starter package for Redux with React and Babel support"
to seed my work.  I updated the UI and redux approach in my application.
You can find Stephen's repo here:

https://github.com/StephenGrider/RallyCodingWeekly

I also followed the awesome Firebase tutorials created by Chris Esplin.
He's a wealth of information and it's easy to quickly code is examples.
His youtube channel is here.

https://www.youtube.com/channel/UCaAByidxypZTYOj4OsKzD2Q

Subscribe to his channel.

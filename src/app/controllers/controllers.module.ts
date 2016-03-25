import DashCtrl from './dash.controller';
import ChatsCtrl from './chats.controller';
import ChatDetailCtrl from './chatDetail.controller';
import AccountCtrl from './account.controller';

angular.module('starter.controllers', [])
.controller('DashCtrl', DashCtrl)
.controller('ChatsCtrl', ChatsCtrl)
.controller('ChatDetailCtrl', ChatDetailCtrl)
.controller('AccountCtrl', AccountCtrl);

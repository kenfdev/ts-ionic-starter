export default function ChatDetailCtrl($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
}
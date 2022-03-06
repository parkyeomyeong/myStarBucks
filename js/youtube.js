// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

//이름 바꾸면 안됨 youtube api가 찾아서 하는거라
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최소 재생할 유튜브 영상 ID
    playerVars: {
        autoplay :true,//자동 재생 유무
        loop :true,//반복 재생 유무
        playlist : 'An6LvWQuj_8'//반복재생하면 뭘 반복재생할지 아이디 넣어줘야함
    },
    
    events : {
        onReady:function(event){
            //영상이준비가 되면 익명함수가 실행되고 준비된 영상을 음소거 하겠다는 의미
            event.target.mute()// 음소거

        }
    }
  });
}
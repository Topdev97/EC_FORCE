//マウスストーカー

//requestAnimationFrameのフレームレート制限
class LimitFlames {
    constructor(framesPerSecond) {
      this.interval =  Math.floor(1000 / framesPerSecond);
      this.previousTime = performance.now();
    }
    isLimitFlames(timestamp) {
      const deltaTime = timestamp - this.previousTime;
      const isLimitOver = deltaTime <= this.interval;
      if(!isLimitOver) {
        this.previousTime = timestamp - (deltaTime % this.interval);
      }
      return isLimitOver;
    }
  }
  
  function cursor () {
    //ポインタがない場合は終了
    if(!matchMedia('(pointer: fine)').matches) {
      return;
    }
  
      //対象が存在しない場合は終了
      const targetPointer = document.getElementById('js-cursor');
      if(!targetPointer) {
          return;
      }
  
    const targetPointerClassList = targetPointer.classList;
  
      //ポインタ設定
    let anime;
    //ポインタ表示
    const posi = {
      x: 0,
      y: 0
    }
    const start = {
      x: 0,
      y: 0
    }
    const delay = {
      x: 0,
      y: 0
    }
    const delayRatio = .85;
  
    let isRender = false;
    let isStopAnime = false;
    let limitFlames = new LimitFlames(60);
    function setPosition(x,y) {
      targetPointer.setAttribute('style', 'transform:translate3d('+x+'px, '+y+'px, 0);');
    }
    function roundValue(value) {
      return Math.round(value * 10) / 10;
    }
    function render (timestamp) {
      if(isStopAnime) {
        return;
      }
      //60fpsにフレームレート制限
      if (limitFlames.isLimitFlames(timestamp)) {
        startAnime();
        return;
      }
      delay.x *= delayRatio;
      delay.y *= delayRatio;
      const x = posi.x + roundValue(delay.x);
      const y = posi.y + roundValue(delay.y);
      setPosition(x,y);
  
      if(posi.x === x) {
        isStopAnime = true;
      }
      startAnime();
    };
    function startAnime() {
      anime = requestAnimationFrame(render);
    }
    function addCursorClass(className) {
      targetPointerClassList.add(className);
    }
    function removeCursorClass(className) {
      targetPointerClassList.remove(className);
    }
  
    document.addEventListener('mousemove', function(e) {
      posi.x = e.clientX;
      posi.y = e.clientY;
  
      if(isStopAnime) {
        startAnime();
        isStopAnime = false;
      }
  
      if(!isRender) {
        setPosition(posi.x,posi.y);
        addCursorClass('is-active');
  
        startAnime();
        isRender = true;
  
      } else {
        delay.x += start.x - posi.x;
        delay.y += start.y - posi.y;
      }
      start.x = posi.x;
      start.y = posi.y;
  
    });
  
    function focusLink() {
      const linkItems = document.querySelectorAll('a,button');
      if(linkItems.length === 0) {
        return;
      }
      const FOCUS_CLASS = 'is-focus';
      linkItems.forEach(function(linkItem) {
        linkItem.addEventListener('mouseenter',function() {
          addCursorClass(FOCUS_CLASS);
        });
        linkItem.addEventListener('mouseleave',function() {
          removeCursorClass(FOCUS_CLASS);
        });
      });
    }
    focusLink();
  
    //iframeの上では動作しないので非表示
    function deActiveIframe() {
      const iframeItems = document.querySelectorAll('iframe');
      if(iframeItems.length === 0) {
        return;
      }
      const HIDDEN_CLASS = 'is-hidden';
      iframeItems.forEach(function(iframeItem) {
        iframeItem.addEventListener('mouseenter',function() {
          addCursorClass(HIDDEN_CLASS);
        });
        iframeItem.addEventListener('mouseleave',function() {
          removeCursorClass(HIDDEN_CLASS);
        });
      });
    }
    deActiveIframe();
  }
  cursor();
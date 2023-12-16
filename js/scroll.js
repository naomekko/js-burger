const child = document.querySelectorAll("#child p,#child img,#child .item");
const cb = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("inview");
      entry.target.classList.add("inview");
      // 監視の解除
      // observer.unobserve(entry.target);
    } else {
      console.log("outview");
      entry.target.classList.remove("inview");
    }
  });
};
const options = {
  root: null, //交差対象の親要素　交差対象の先祖要素などの指定でいるがあまり使わない
  //rootMargin: "-300px 0px 0px", //viewportとの交差を監視　例えば上マージンを-100pxとすればスクロールを100pxすれば交差すると判定する
  // threshold: [0,0.5,1],要素が画面のどの境界線に入ったかで表示を制御する
};
const io = new IntersectionObserver(cb);
child.forEach(function (value) {
  io.observe(value);
});

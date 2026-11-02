// 分類按鈕：點選後只顯示符合類型的推薦網站
const filterButtons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const chosen = button.dataset.filter;
    cards.forEach((card) => {
      const shouldShow = chosen === 'all' || card.dataset.category === chosen;
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

// 小測驗：依照需求提供一個快速的網站方向
const resultMessages = {
  photo: '建議先試「AI 個人色彩分析」，快速取得初步方向，再用自然光與實際衣服顏色交叉確認。',
  palette: '建議從 Colorwise.me 開始探索個人色盤，將喜歡與不喜歡的顏色整理成自己的穿搭清單。',
  style: '建議看看 FaceScore，將色彩分析延伸到髮型、妝容等造型靈感；各項功能以網站實際提供為準。'
};

const quizOptions = document.querySelectorAll('.quiz-option');
const quizResult = document.querySelector('#quizResult');

quizOptions.forEach((option) => {
  option.addEventListener('click', () => {
    quizResult.textContent = resultMessages[option.dataset.result];
    quizOptions.forEach((item) => item.classList.remove('selected'));
    option.classList.add('selected');
  });
});

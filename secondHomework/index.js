// First task

const input = document.querySelector('.input-num');

const view = {
  page: document.querySelector('.page-wrapper'),
  addParagraph: function(message) {
    this.paragraph = document.createElement('p');
    this.paragraph.textContent = message;
    this.page.append(this.paragraph)
  },
  removeParagraph: function() {
    if (this.paragraph) {
      this.paragraph.remove();
      this.paragraph = null;
    }
  }
}

input.addEventListener('input', () => {
  view.removeParagraph();
  try {
    if (!input.value) {
      throw new Error('Поле пустое');
    } else if (Number(input.value) < 5) {
      throw new Error('Число меньше пяти');
    } else if (Number(input.value) > 10) {
      throw new Error('Число больше десяти');
    }
  } catch (e) {
    view.addParagraph(`Ошибка! ${e.message}`);
  }
})

// second task

function lottery() {
  console.log("Вы начали игру");
  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
    }, 1000);
  });
  return promise;
}

const startLottery = async () => {
  try {
    const win = await lottery();
    console.log("Вы выиграли")
    const prize = await new Promise((res) => res(win));
    console.log("Вам заплатили")
  } catch (e) {
    console.log("Вы проиграли")
  } finally {
    console.log("Игра закончена");
  }
}

startLottery();

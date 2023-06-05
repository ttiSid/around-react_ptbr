class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeLikeCardStatus(cardId, likeStatus) {
    if (likeStatus === true) {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this.headers,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  deleteCard(card) {
    return fetch(`${this.baseUrl}/cards/${card}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setUserInfo({ name, about }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  } /* {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  } */
}

const api = new Api({
  baseUrl: `https://around.nomoreparties.co/v1/${process.env.REACT_APP_API_URL}`,
  headers: {
    authorization: `${process.env.REACT_APP_API_KEY}`,
    "Content-Type": "application/json",
  },
});
export default api;


import axios from 'axios';

export function getCardInfo(card, event, self) {
  let cards = [event.target.id];

  axios.get(`/p2p-api/v2/cardbin?bin=${card}`).then(res => {
    if (cards === 'senderCardNumber') {
      self.setState({
        senderCardNumber: res.data,
      });
    } else {
      self.setState({
        destinationCardNumber: res.data,
      });
    }
  });
}

export function getCommisionInfo(Commision, self) {
  axios.post(`/p2p-api/v2/fee`, Commision).then(res => {
    self.setState({
      fee: res.data,
    });
  });
}

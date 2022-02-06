var User;

/*Work in Progress*/
function watchAd() {
  User.watchAd(web3.eth.accounts[0])
}

$(document).ready(function () {
  $('#ad').on('click', watchAd())

  $.getJSON('/contracts/Advertisement.json').then(function (data) {
    var AdvertisementContract = TruffleContract(data)
    AdvertisementContract.setProvider(web3.currentProvider)
    AdvertisementContract.deployed().then(function (instance) {
      Advertisement = instance;
      var WatchAd = User.watchAd()
      WatchAd.watch(function (error, result) {
        if (error) console.error(error)
        else updateTotalSupply();
      })
      updateTotalSupply();
    })
  })
})

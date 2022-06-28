 const profile = {
    id: 120350,
    email: "zouhair.gh@gmail.com",
}

 const settings = {
    launchScreen: "Home",
    currency: "USD",
    appearance: "Dark",
    language: "English",
    faceId:true}

const DATA = [
  {
    title: "APP",
    data: [{name:'Launch Screen',options:settings.launchScreen},{name:'appearance',options:settings.appearance}]
  },
  {
    title: "ACCOUNT",
    data: [{name:'Payement Currency',options:settings.currency},{name:'Language',options:settings.language}]
  },
  {
    title: "SECURITY",
    data: [{name:'faceId',type:settings.faceId},{name:'Password settings'},{name:'Change Password'},{name:'2-Factor Authentification'}]
  },
  
  
  
];



export {profile,settings,DATA}
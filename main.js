function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mIiK8PIog//model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}
 var dog=0;
 var cat=0;
 varlion=0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ '    Detected Cat -'+cat+ 'Detected Lion -'+lion;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1') 
    

    if (results[0].label == "Barking") {
      img.src = 'https://i.gifer.com/3bmV.gif';
      dog=dog+1;
    } else if (results[0].label == "Meow") {
      img.src = 'https://c.tenor.com/JlhpkIk57UgAAAAM/cat-meow.gif';
      cat=cat+1;
    } else if (results[0].label == "Roaring") {
      img.src = 'https://acegif.com/wp-content/uploads/2020/07/lion-roar.gif';
      lion=lion+1;
    }else{
      img.src = 'ears.png';
    }
  }
}

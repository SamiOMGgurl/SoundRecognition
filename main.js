function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/WBzn5_BV0/model.json', modelReady); 
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else 
    {
        console.log(results);

        document.getElementById("result_label").innerHTML = 'Hearing : ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy : ' + (results[0].confidence*100) + "%";

        img3 = document.getElementById('BN3');
        img2 = document.getElementById('C2');
        img4 = document.getElementById('TB4');

        if (results[0].label == "Background Noise")
        {
            img3.src = 'aliens-03.gif';
            img2.src = 'aliens-02.png';
            img4.src = 'aliens-04.png';
        } 
        else if (results[0].label == "Hand Clap")
        {
            img2.src = 'aliens-02.gif';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
        }
        else if (results[0].label == "Table Bang")
        {
            img4.src = 'aliens-04.gif';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
        }
    }
}
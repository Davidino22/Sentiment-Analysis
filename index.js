import fetch from 'node-fetch';

let input = process.argv[2];

fetch('http://text-processing.com/api/sentiment/', {
        method: 'post',
        body: `text=${input}`,
    })
    .then((res) => res.json())
    .then((json) => {
        console.log('negative  ' + Math.round(json.probability.neg * 100) + '%');
        console.log('positive  ' + Math.round(json.probability.pos * 100) + '%');
        console.log('neutral ' + Math.round(json.probability.neutral * 100) + '%');
        console.log('overall:' + json.label);
        return json;
    })
    .catch((error) => {
        console.log(error);
    });
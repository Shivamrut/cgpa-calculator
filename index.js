const btn = document.getElementById('btn');
const imaths= document.getElementById('i-mathematics')
const smaths= document.getElementById('s-mathematics')

const ielectricalScience = document.getElementById('i-electrical-science');
const selectricalScience = document.getElementById('s-electrical-science');

const iphysics = document.getElementById('i-physics');
const sphysics = document.getElementById('s-physics');

const imechanics = document.getElementById('i-mechanics');
const smechanics = document.getElementById('s-mechanics');

const iegd = document.getElementById('i-egd');
const segd = document.getElementById('s-egd');

const ielectricalLab = document.getElementById('i-electrical-laboratory');
const selectricalLab = document.getElementById('s-electrical-laboratory');

const iphysicsLab = document.getElementById('i-physics-laboratory');
const sphysicsLab = document.getElementById('s-physics-laboratory');

const ienglish = document.getElementById('i-english');
const senglish = document.getElementById('s-english');

const imediaPresentation = document.getElementById('i-media-presentation');
const smediaPresentation = document.getElementById('s-media-presentation');

const imathsVal = parseInt(imaths.value);
const smathsVal = parseInt(smaths.value);

const ielectricalScienceVal = parseInt(ielectricalScience.value);
const selectricalScienceVal = parseInt(selectricalScience.value);

const iphysicsVal = parseInt(iphysics.value);
const sphysicsVal = parseInt(sphysics.value);

const imechanicsVal = parseInt(imechanics.value);
const smechanicsVal = parseInt(smechanics.value);

const iegdVal = parseInt(iegd.value);
const segdVal = parseInt(segd.value);

const ielectricalLabVal = parseInt(ielectricalLab.value);
const selectricalLabVal = parseInt(selectricalLab.value);

const iphysicsLabVal = parseInt(iphysicsLab.value);
const sphysicsLabVal = parseInt(sphysicsLab.value);

const ienglishVal = parseInt(ienglish.value);
const senglishVal = parseInt(senglish.value);

const imediaPresentationVal = parseInt(imediaPresentation.value);
const smediaPresentationVal = parseInt(smediaPresentation.value);

btn.addEventListener('click',()=>{
    const imaths= document.getElementById('i-mathematics')
const smaths= document.getElementById('s-mathematics')

const ielectricalScience = document.getElementById('i-electrical-science');
const selectricalScience = document.getElementById('s-electrical-science');

const iphysics = document.getElementById('i-physics');
const sphysics = document.getElementById('s-physics');

const imechanics = document.getElementById('i-mechanics');
const smechanics = document.getElementById('s-mechanics');

const iegd = document.getElementById('i-egd');
const segd = document.getElementById('s-egd');

const ielectricalLab = document.getElementById('i-electrical-laboratory');
const selectricalLab = document.getElementById('s-electrical-laboratory');

const iphysicsLab = document.getElementById('i-physics-laboratory');
const sphysicsLab = document.getElementById('s-physics-laboratory');

const ienglish = document.getElementById('i-english');
const senglish = document.getElementById('s-english');

const imediaPresentation = document.getElementById('i-media-presentation');
const smediaPresentation = document.getElementById('s-media-presentation');

const imathsVal = parseInt(imaths.value);
const smathsVal = parseInt(smaths.value);

const ielectricalScienceVal = parseInt(ielectricalScience.value);
const selectricalScienceVal = parseInt(selectricalScience.value);

const iphysicsVal = parseInt(iphysics.value);
const sphysicsVal = parseInt(sphysics.value);

const imechanicsVal = parseInt(imechanics.value);
const smechanicsVal = parseInt(smechanics.value);

const iegdVal = parseInt(iegd.value);
const segdVal = parseInt(segd.value);

const ielectricalLabVal = parseInt(ielectricalLab.value);
const selectricalLabVal = parseInt(selectricalLab.value);

const iphysicsLabVal = parseInt(iphysicsLab.value);
const sphysicsLabVal = parseInt(sphysicsLab.value);

const ienglishVal = parseInt(ienglish.value);
const senglishVal = parseInt(senglish.value);

const imediaPresentationVal = parseInt(imediaPresentation.value);
const smediaPresentationVal = parseInt(smediaPresentation.value);
    console.log('clicked');
    var sum = 0;
    // console.log(parseInt(iphysicsLab.value));
    sum += oneCredit(iphysicsLabVal,sphysicsLabVal);
    sum += oneCredit(ielectricalLabVal,selectricalLabVal);
    sum += oneCredit(imediaPresentationVal,smediaPresentationVal);
    sum += twoCredit(ienglishVal,senglishVal);
    sum += threeCredit(iphysicsVal,sphysicsVal);
    sum += threeCredit(ielectricalScienceVal,selectricalScienceVal);
    sum += threeCredit(imechanicsVal,smechanicsVal);
    sum += threeCredit(iegdVal,segdVal);
    sum += threeCredit(imathsVal, smathsVal);
    console.log(sum);
    document.getElementById('output').style.display = 'block';
    const cgpa = document.getElementById('cgpa');
    cgpa.innerHTML = `${sum/200}`;

})

function oneCredit(vali,vale)
{
    return (vali+(vale/2));
}
function twoCredit(vali,vale)
{
    return (vali+(vale/2))*2;
}
function threeCredit(vali,vale)
{
    return (vali+(vale/2))*3;
}
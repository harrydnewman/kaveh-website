import '../App.css'
import { useNavigate } from 'react-router-dom';
import blueVideo from '../videos/bluebox.mp4'
import pinkVideo from '../videos/pinkbox.mp4'
import whiteVideo from '../videos/whitebox.mp4'

export default function Home() {
    const navigate = useNavigate();
    const pinkText = [`It's been hard since they left,\nTo find the motivation to do, not for lack of trying`,
        `I feel so far removed from everything that has shaped me,\nAnd it's liberating\nAt the same time,\nI wish I could stop caring so much,\nAbout what I must be.`,
        `I find belonging in the arms of a guy I met last week,\nIn the smile of a girl\nWho I was convinced could never see me that way -\nI'm so glad she called me out on our first date.`,
        `I want to be present,\nTo live in a room that is all mine,\nIn a place that I am not deeply afraid to exist in.\n`]
    const blueText = [`She can't even look at me.\nWhat scares you?\nAm I too much of a fag for your liking?`,
        `I feel like myself for the first time in my life\nAnd I haven't seen you in a while\nMaybe it's because my bones have changed`,
        `She fears that I have strayed from the lord,\nAnd I have.`,
        `I have never been more free.`,
        `And I guess you don't want to see me.\nThe feeling's mostly mutual.`,
        `(but I do miss you sometimes)`]

    const whiteText = [`I feel like a bad relative,\nWe grew up together-\nShe saw me at my lowest,\nBut that's because I was never myself as a child,\nAnd by the time I could articulate the ways I felt about my body,\nThey'd already decided I was a sin.`,
        `I put the distance there,\nIntentionally,\nto protect myself\nfrom the burn of every conservative agenda broadcasted on their story,\ndesperate to convince me that I am wrong.`,
        `These people raised me -\nMy grandparents,\nMy aunts,\nMy cousins, who are all older than me by no fault of my own.\nI missed Papa's birthday,\nThen aunty Medo's,\nNow, Tehani's graduation`,
        `Sometimes, I miss it.\nTill I remember how awful I felt around them,`,
        `Do I explain myself to them?\nAgain?\nAnd, again,\nMy mouth losing its will to utter any truth\nConfessions flying right over their heads\nBecause they are happier that way\nAnd I have found my joy away from them.`,
        `I will always talk to Nana though,\nshe may not know what I stand for, but in ways\nshe knows who I am\n(because she asks).`,
        `I had always intended to go no contact with my family once I'd left,\nNow that occasion is here,\nAnd I feel this weight for the (necessary) distance I have wedged between myself and the people I once claimed as my own.`]

    const pinkButton = () => {
        navigate('/video/pink', { state: { video: pinkVideo, text: pinkText, color: "pink" } });
    }

    const blueButton = () => {
        navigate('/video/blue', { state: { video: blueVideo, text: blueText, color: "blue" } });
    }

    const whiteButton = () => {
        navigate('/video/white', { state: { video: whiteVideo, text: whiteText, color: "white" } });
    }

    const aboutButton = () => {
        navigate('/about');
    }
    return (
        <div>
            <div className='mainText'>
                <h1 onClick={() => aboutButton()}>You can choose how you experience the work</h1>
            </div>
            <div className='buttons'>
                <div onClick={() => blueButton()} className='blue-button'>
                    <p>(but i do miss you sometimes)</p>
                </div>
                <div onClick={() => pinkButton()} className='pink-button'>
                    <p>It (in a context I define for myself)</p>
                </div>
                <div onClick={() => whiteButton()} className='white-button'>
                    <p>I feel like a bad family member [for the (necessary) distance]</p>
                </div>
            </div>
        </div>
    )
}
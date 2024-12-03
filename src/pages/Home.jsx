import '../App.css'
import { useNavigate } from 'react-router-dom';
import blueVideo from '../videos/bluebox.mp4'
import pinkVideo from '../videos/pinkbox.mp4'
import whiteVideo from '../videos/whitebox.mp4'

export default function Home() {
    const navigate = useNavigate();

    const pinkText = `
    It’s been hard since they left,
To find the motivation to do, not for lack of trying 
 
I feel so far removed from everything that has shaped me,
And it’s liberating
At the same time,
I wish I could stop caring so much,
About what I must be.
 
I find belonging in the arms of a guy I met last week,
In the smile of a girl
Who I was convinced could never see me that way –
I’m so glad she called me out on our first date.
 
I want to be present,
To live in a room that is all mine,
In a place that I am not deeply afraid to exist in.`

    const blueText = `
She can’t even look at me.
What scares you?
Am I too much of a fag for your liking?
 
I feel like myself for the first time in my life
And I haven’t seen you in a while
Maybe it’s because my bones have changed
 
She fears that I have strayed from the lord,
And I have.
 
I have never been more free.
 
And I guess you don’t want to see me.
The feeling’s mostly mutual.
 
(but I do miss you sometimes)
 `

    const whiteText = `
I feel like a bad relative,
We grew up together-
She saw me at my lowest,
But that’s because I was never myself as a child,
And by the time I could articulate the ways I felt about my body,
They’d already decided I was a sin.
 
I put the distance there,
Intentionally,
to protect myself
from the burn of every conservative agenda broadcasted on their story,
desperate to convince me that I am wrong.
 
These people raised me –
My grandparents,
My aunts,
My cousins, who are all older than me by no fault of my own.
I missed Papa’s birthday,
Then aunty Medo’s,
Now, Tehani’s graduation

Sometimes, I miss it.
Till I remember how awful I felt around them,
 
Do I explain myself to them?
Again?
And, again,
My mouth losing its will to utter any truth
Confessions flying right over their heads
Because they are happier that way
And I have found my joy away from them.
 
I will always talk to Nana though,
she may not know what I stand for, but in ways
she knows who I am
(because she asks).
 
I had always intended to go no contact with my family once I’d left,
Now that occasion is here,
And I feel this weight for the (necessary) distance I have wedged between myself and the people I once claimed as my own.
`

    const pinkButton = () => {
        navigate('/video', { state: { video: pinkVideo, text: pinkText, color: "pink" } });
    }

    const blueButton = () => {
        navigate('/video', { state: { video: blueVideo, text: blueText, color: "blue" } });
    }

    const whiteButton = () => {
        navigate('/video', { state: { video: whiteVideo, text: blueText, color: "blue" } });
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
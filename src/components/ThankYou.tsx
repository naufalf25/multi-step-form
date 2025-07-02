import Card from './Card';
import ThankYouIcon from '../assets/images/icon-thank-you.svg';

function ThankYou() {
  return (
    <Card title="" description="">
      <div className="my-32 flex w-full flex-col items-center justify-center gap-4">
        <img src={ThankYouIcon} alt="thank you" className="w-16 lg:w-20" />
        <h1 className="text-3xl font-bold text-blue-950">Thank You!</h1>
        <div className="text-grey-500 text-center lg:text-lg">
          <p>Thanks for confirming your subscription!</p>
          <p>
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com
          </p>
        </div>
      </div>
    </Card>
  );
}

export default ThankYou;

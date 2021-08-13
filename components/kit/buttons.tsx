import { Button } from 'components/shared';

function Buttons() {
  return (
    <div>
      <Button>this is a primary style</Button>
      <br />
      <Button styleType="secondary">this is a secondary style</Button>
      <br />
      <Button styleType="tertiary">this is a tertiary style</Button>
      <br />
      <Button disabled>this is a primary disabled</Button>
      <br />
      <Button styleType="secondary" disabled>this is a secondary disabled</Button>
      <br />
      <Button styleType="tertiary" disabled>this is a tertiary disabled</Button>
    </div>
  );
}

export default Buttons;

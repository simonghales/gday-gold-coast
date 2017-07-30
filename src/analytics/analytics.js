import ReactGa from 'react-ga';

type _eventArgs = {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

class AnalyticsHandler {

  constructor() {
    ReactGa.initialize('UA-103578664-1');
  }

}

export default new AnalyticsHandler();
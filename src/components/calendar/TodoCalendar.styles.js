import styled from 'styled-components';

export const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  padding: 16px 8px;
  margin-bottom: 12px;
  background: #f1f5f8;
  background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
  background-size: 25px 25px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
 
  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;   

    .react-calendar__navigation__label {
    color: #004c6d;
    font-family: inherit;   
    background-color: #00c3ff89; 
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;    
      color: #004c6d;
      background-color: #00c3ff89;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    margin-bottom: 4px;
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 1px;
    background-color: #00c3ff89;
    border: 0;
    border-radius: 3px;
    color: #004c6d;
    padding: 4px 0;
    font-family: inherit;

    &:hover,
    &:active {
      background-color: hsla(166, 100%, 50%, 0.7);
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.7;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #004c6d;
    font-weight: bold;
  }

  /* ~~~ active day styles ~~~ */
  .react-calendar__tile--range {
    box-shadow: 0 0 4px 1px #004c6d;
    background-color: hsla(166, 100%, 50%, 0.7);
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months, 
  .react-calendar__decade-view__years, 
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;

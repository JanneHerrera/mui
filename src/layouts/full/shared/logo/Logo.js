import { Link } from 'react-router-dom';
import { ReactComponent as LogoDark } from 'src/assets/images/logos/dark-logo.svg';
import { styled } from '@mui/material';
import img from 'src/assets/images/logos/MoneyMatters.png';
import { Box } from '@material-ui/core';

const LinkStyled = styled(Link)(() => ({
  height: '150px',
  width: '180px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-around',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      {/* <LogoDark height={70} /> */}
      {/* <h2>MonneyMatter</h2> */}
      <img src={img} />
    </LinkStyled>
  );
};

export default Logo;

import { NavLink as RouterNavLink } from 'react-router-dom';
import {
  Box, NavLink, Flex, Image,
} from '@mantine/core';
import { useState } from 'react';
import logo from '../assets/logo.png';

const data = [
  { label: 'Films', path: '/films' },
  { label: 'Planets', path: '/planets' },
  { label: 'Characters', path: '/people' },
];

export function Header() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={item.label}
      onClick={() => setActive(index)}
      color="rgba(0, 0, 0, 1)"
      variant="filled"
      component={RouterNavLink}
      to={item.path}
    />
  ));

  return (
    <div>
      <Box m="0 auto" maw={1200}>
        <Flex
          mih={50}
          gap="xl"
          justify="space-around"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Flex
            justify="center"
            align="flex-start"
          >
            <Image
              w={150}
              src={logo}
              alt="Star Wars"
            />
          </Flex>
          <Flex
            direction="row"
          >
            {items}
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

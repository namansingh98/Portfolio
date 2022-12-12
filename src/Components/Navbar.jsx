import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Link,
} from '@chakra-ui/react'
// import hamburger from "../assets/hamburger.png"
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div disply="flext" style={{ margin: "20px 0 0 20px" }}>

        <Button colorScheme='gray' onClick={onOpen}>
          {/* <img src={hamburger}  alt="icon"  /> */}
          <ion-icon name="menu-outline" style={{ fontSize: "25px" }}></ion-icon>
        </Button>
      </div>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'><h2>Naman Rathore</h2></DrawerHeader>
          <DrawerBody flexDirection="column" display='flex'>
            <Link>Home </Link>
            <Link>Project </Link>
            <Link>About us </Link>
            <Link>Hire Me</Link>

          </DrawerBody>
          <Button colorScheme="red" width="100px" className="Hire">Contact Me</Button>
        </DrawerContent>
      </Drawer>
    </>
  )
}

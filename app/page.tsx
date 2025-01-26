"use client";
import classes from "./page.module.css";
import {
  Button,
  Container,
  Overlay,
  Group,
  Text,
  Code,
  Box,
} from "@mantine/core";
import { LeadGrid } from "@/components/GridLayouts/LeadGrid";
import { Accordion_t1 } from "@/components/accordion/accordion";
import { CardsCarousel } from "@/components/carousel/CardsCarousel";
import { ActionsGrid } from "@/components/Badgecard/ActionsGrid";
import { FeaturesCards } from "@/components/Features/FeaturesCards";
import { useMouse } from "@mantine/hooks";

export default function Home() {
  const { ref, x, y } = useMouse();
  return (
    <>
      <Box ref={ref} className={classes.wrapper}>
        <Text ta="center">
          Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
        </Text>
        <Container size={700} className={classes.inner}>
          <div className={classes.mouse} />
          <h1 className={classes.title}>
            Embrace the Power
            <br /> of{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
              inherit
            >
              Open-Source
            </Text>{" "}
            and Collaboration
          </h1>

          <Text className={classes.description} color="dimmed">
            Join us on our journey to explore, collaborate, and innovate in the
            world of FOSS!
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
            >
              Join
            </Button>

            <Button
              component="a"
              href="https://github.com/mantinedev/mantine"
              size="xl"
              variant="default"
              className={classes.control}
              leftSection={""}
            >
              GitHub
            </Button>
          </Group>
        </Container>
      </Box>

      <Container size={1200} p={50}>
        <CardsCarousel />
      </Container>

      <Container size={1000} p={50}>
        <ActionsGrid />
      </Container>

      <FeaturesCards />

      <div className={classes.wrapper}>
        <Container p={50}>
          <LeadGrid />
        </Container>
      </div>

      <Accordion_t1 />
    </>
  );
}

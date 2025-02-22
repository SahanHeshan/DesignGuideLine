"use client";
import { IconPhoto, IconPrinter, IconCameraSelfie } from "@tabler/icons-react";
import { Accordion, Container } from "@mantine/core";

export function Accordion_t1() {
  return (
    <Container size={800}>
      <Accordion variant="contained">
        <Accordion.Item value="photos">
          <Accordion.Control
            icon={<IconPhoto size={20} color="var(--mantine-color-red-6)" />}
          >
            Recent photos
          </Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="print">
          <Accordion.Control
            icon={<IconPrinter size={20} color="var(--mantine-color-blue-6)" />}
          >
            Print photos
          </Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="camera">
          <Accordion.Control
            icon={
              <IconCameraSelfie size={20} color="var(--mantine-color-teal-6)" />
            }
          >
            Camera settings
          </Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

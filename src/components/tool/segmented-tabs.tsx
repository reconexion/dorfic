import type { ReactNode } from "react";
import { m } from "motion/react";
import type { Key } from "react-aria-components";
import { Tab, TabList, TabPanel, Tabs } from "@/components/application/tabs/tabs";

interface SegmentedTabsProps<T extends string> {
    id: string;
    label: string;
    value: T;
    onChange: (value: T) => void;
    items: { id: T; label: string; content: ReactNode }[];
}

/**
 * Tabs de Untitled UI (tipo "button-border") con un indicador que se desliza
 * entre opciones usando layoutId de Motion. Cada pestaña tiene su panel de ajustes.
 */
export const SegmentedTabs = <T extends string>({ id, label, value, onChange, items }: SegmentedTabsProps<T>) => (
    <Tabs selectedKey={value} onSelectionChange={(key: Key) => onChange(key as T)} keyboardActivation="automatic" className="gap-4">
        <TabList aria-label={label} type="button-border" size="sm" fullWidth className="w-full bg-brand-50! ring-brand-200!">
            {items.map((item) => (
                <Tab key={item.id} id={item.id} className="relative bg-transparent! text-brand-secondary shadow-none! selected:text-white">
                    {({ isSelected }) => (
                        <>
                            {isSelected && (
                                <m.span
                                    layoutId={`seg-${id}`}
                                    aria-hidden
                                    className="absolute inset-0 rounded-md bg-brand-solid shadow-[0_6px_16px_-6px_rgb(255_106_0/0.8)]"
                                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                                />
                            )}
                            <span className="relative">{item.label}</span>
                        </>
                    )}
                </Tab>
            ))}
        </TabList>
        {items.map((item) => (
            <TabPanel key={item.id} id={item.id}>
                {item.content}
            </TabPanel>
        ))}
    </Tabs>
);

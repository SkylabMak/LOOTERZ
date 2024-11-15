// app/providers.tsx

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return <NextUIProvider className="min-h-full">{children}</NextUIProvider>;
}

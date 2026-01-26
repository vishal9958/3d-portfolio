import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { THEME } from "../constants";

interface ChatInputProps {
  onSendMessage: (msg: string) => void;
  onTyping: () => void;
  placeholder?: string;
}

export const ChatInput = ({
  onSendMessage,
  onTyping,
  placeholder = "Message",
}: ChatInputProps) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSendMessage(value);
    setValue("");
  };

  return (
    <div className={cn("p-4 pt-0", THEME.bg.primary)}>
      <div className={cn("relative rounded-lg p-2.5 flex items-center gap-2", THEME.bg.tertiary)}>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onTyping();
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={placeholder}
          autoComplete="off"
          className={cn(
            "flex-1 bg-transparent border-none outline-none font-medium min-w-0",
            THEME.text.primary,
            THEME.text.placeholder
          )}
        />
        <Button size="icon" variant="ghost" onClick={handleSend}>
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

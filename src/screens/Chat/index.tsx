import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useAuth } from "../../hooks/auth";

interface IMessage {
  _id: number;
  text: string;
  createdAt: Date;
  user: {
    _id: number;
    name: string;
    avatar: string;
  };
}

export function Chat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Chat Fora do Ar, Aguarde a proxima versão!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: user.name,
          avatar: user.avatar,
        },
      },
    ]);
  }, []);

 // console.log(messages);

  // Callback quando estiver enviando a mensagem
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={{flex:1}}>
      <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      // user={{
      //   _id: 1,
      // }}
    />
    <View style={{flex:0.1}}>

    </View>
    </View>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import Button from '@/components/ui/button';
import { Pause, Play, Square, X } from 'lucide-react-native';
import { useColors } from '@/hooks/use-colors';

interface TimerModalProps {
  isVisible: boolean;
  onClose: () => void;
  initialDuration?: number;
}

export const TimerModal = ({ isVisible, onClose, initialDuration = 0 }: TimerModalProps) => {
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [customDuration, setCustomDuration] = useState(initialDuration);
  const timerRef = useRef<NodeJS.Timeout>();
  const { getColor } = useColors();

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    setTimeLeft(initialDuration);
    setCustomDuration(initialDuration);
  }, [initialDuration]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    setTimeLeft(customDuration);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-[90%] max-w-sm bg-card rounded-lg">
          <View className="flex-row justify-between items-center p-4 border-b border-border">
            <Text className="text-xl font-semibold text-card-foreground">Timer</Text>
            <Pressable 
              onPress={onClose}
              className="p-2 rounded-full active:opacity-70"
            >
              <X size={24} color={getColor('card-foreground')} />
            </Pressable>
          </View>

          <View className="items-center py-12">
            <Text className="text-6xl font-bold text-primary">
              {formatTime(timeLeft)}
            </Text>
          </View>

          <View className="p-4 gap-4">
            {!isRunning ? (
              <Button
                variant="primary"
                size="lg"
                onPress={handleStart}
                className="w-full justify-center"
              >
                <Play size={24} stroke={getColor('primary-foreground')} />
              </Button>
            ) : (
              <Button
                variant="primary"
                size="lg"
                onPress={handlePause}
                className="w-full justify-center"
              >
                <Pause size={24} stroke={getColor('primary-foreground')} />
              </Button>
            )}
            <Button
              variant="destructive"
              size="lg"
              onPress={handleStop}
              className="w-full justify-center"
            >
              <Square size={24} stroke={getColor('destructive-foreground')} />
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}; 
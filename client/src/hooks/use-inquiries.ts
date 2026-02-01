import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await apiRequest("POST", api.inquiries.create.path, data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé / تم إرسال الرسالة",
        description: "Nous vous répondrons dans les plus brefs délais. / سنرد عليك في أقرب وقت ممكن.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Erreur / خطأ",
        description: error.message || "Une erreur est survenue. / حدث خطأ.",
        variant: "destructive",
      });
    },
  });
}

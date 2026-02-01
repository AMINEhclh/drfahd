import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/routes";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const { t, direction } = useLanguage();
  const { mutate, isPending } = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'rtl' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-primary mb-6">{t("contact.title")}</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.name")}</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={t("contact.name")} 
                    className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.phone")}</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={t("contact.phone")} 
                    className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.message")}</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={t("contact.message")}
                    className="min-h-[120px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none" 
                    {...field}
                    value={field.value || ""} // handle null/undefined
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {t("contact.sending")}
              </>
            ) : (
              <>
                <Send className={direction === 'rtl' ? "ml-2 h-5 w-5 rtl-flip" : "mr-2 h-5 w-5"} />
                {t("contact.submit")}
              </>
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}

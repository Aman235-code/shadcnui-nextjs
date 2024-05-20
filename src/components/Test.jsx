import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DownloadIcon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Test() {
  return (
    <div>
      {/* buttons  */}
      <Button variant="outline">Button 1</Button>
      <Button variant="destructive">Button 2</Button>
      <Button variant="default">Button 3</Button>
      <Button variant="link">Button Link</Button>
      <Button disabled>Button Disabled</Button>
      {/* Icon  */}
      <Button variant="outline" size="icon">
        <TrashIcon className="h-4 w-4" />
      </Button>
      <Button variant="destructive">
        <TrashIcon className="mr-2 h-4 w-4" />
        Delete
      </Button>
      <Button disabled>
        Uploading
        <DownloadIcon className="ml-2 h-4 w-4 animate-bounce" />
      </Button>
      {/* Link  */}
      <Button asChild variant="ghost">
        <Link href={"/login"}>Login</Link>
      </Button>

      {/* Alert  */}
      <Alert variant="destructive">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      {/* Card  */}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

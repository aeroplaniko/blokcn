import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/new-york-v4/ui/table"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { PlusIcon, SearchIcon, MoreHorizontal, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/registry/new-york-v4/ui/dropdown-menu"
import { ContentHubHeader } from "@/components/header"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/registry/new-york-v4/ui/pagination"

export default function ContentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      {/* Header component */}
      <ContentHubHeader />

      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Content</h1>
            <p className="text-muted-foreground">19 items</p>
          </div>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create content item
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="styleguide" className="pl-9 w-[220px]" />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Content type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              <SelectItem value="changelog">Blok changelog</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="link" className="text-primary">
            Clear all
          </Button>
        </div>

        {/* Content Table */}
        {/* Note: Adding extra py padding to table rows to match the design */}
        <div className="border rounded-md bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px] pl-6">Name</TableHead>
                <TableHead>Content type</TableHead>
                <TableHead>Updated by</TableHead>
                <TableHead className="cursor-pointer">
                  Updated on
                  <span className="ml-1">↓</span>
                </TableHead>
                <TableHead>Published by</TableHead>
                <TableHead>Published on</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {changelogData.map((item) => (
                <TableRow key={item.id} className="py-4">
                  <TableCell className="font-medium py-4 pl-6">{item.name}</TableCell>
                  <TableCell className="py-4">{item.contentType}</TableCell>
                  <TableCell className="py-4">{item.updatedBy}</TableCell>
                  <TableCell className="py-4">{item.updatedOn}</TableCell>
                  <TableCell className="py-4">{item.publishedBy}</TableCell>
                  <TableCell className="py-4">{item.publishedOn}</TableCell>
                  <TableCell className="py-4">
                    <Badge variant={"success"} className="uppercase">
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-end mt-4">
            <div className="w-full flex justify-end items-center">
                <span className="text-muted-foreground text-sm">1-9 of 9</span>
            </div>
          <Pagination className="justify-end mx-0 w-fit">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  )
}

// Sample data
const changelogData = [
  {
    id: 1,
    name: "Changelog styleguide 20250312",
    contentType: "Blok changelog",
    updatedBy: "Thomas Edward Kelly",
    updatedOn: "Mar 28, 2025, 11:39 AM",
    publishedBy: "Thomas Edward Kelly",
    publishedOn: "Mar 28, 2025, 11:40 AM",
    status: "published",
  },
  {
    id: 2,
    name: "Changelog styleguide 20250311",
    contentType: "Blok changelog",
    updatedBy: "Thomas Edward Kelly",
    updatedOn: "Mar 11, 2025, 9:13 AM",
    publishedBy: "Thomas Edward Kelly",
    publishedOn: "Mar 11, 2025, 9:14 AM",
    status: "published",
  },
  {
    id: 3,
    name: "Changelog styleguide 20250210",
    contentType: "Blok changelog",
    updatedBy: "Thomas Edward Kelly",
    updatedOn: "Feb 10, 2025, 2:46 PM",
    publishedBy: "Thomas Edward Kelly",
    publishedOn: "Feb 10, 2025, 2:47 PM",
    status: "published",
  },
  {
    id: 4,
    name: "Changelog styleguide 20250209",
    contentType: "Blok changelog",
    updatedBy: "Frank Grinaert",
    updatedOn: "Feb 9, 2025, 3:06 PM",
    publishedBy: "Frank Grinaert",
    publishedOn: "Feb 9, 2025, 3:07 PM",
    status: "published",
  },
  {
    id: 5,
    name: "Changelog styleguide 20240820",
    contentType: "Blok changelog",
    updatedBy: "Frank Grinaert",
    updatedOn: "Aug 20, 2024, 7:18 AM",
    publishedBy: "Frank Grinaert",
    publishedOn: "Aug 20, 2024, 7:19 AM",
    status: "published",
  },
  {
    id: 6,
    name: "Changelog styleguide 20240620",
    contentType: "Blok changelog",
    updatedBy: "Frank Grinaert",
    updatedOn: "Jun 21, 2024, 7:40 AM",
    publishedBy: "Frank Grinaert",
    publishedOn: "Jun 21, 2024, 7:41 AM",
    status: "published",
  },
  {
    id: 7,
    name: "Changelog styleguide 20240506",
    contentType: "Blok changelog",
    updatedBy: "Frank Grinaert",
    updatedOn: "May 6, 2024, 8:04 PM",
    publishedBy: "Frank Grinaert",
    publishedOn: "May 6, 2024, 8:05 PM",
    status: "published",
  },
  {
    id: 8,
    name: "Changelog styleguide 20240122",
    contentType: "Blok changelog",
    updatedBy: "Frank Grinaert",
    updatedOn: "Jan 22, 2024, 12:15 PM",
    publishedBy: "Frank Grinaert",
    publishedOn: "Jan 22, 2024, 12:16 PM",
    status: "published",
  },
  {
    id: 9,
    name: "Changelog styleguide 20231220",
    contentType: "Blok changelog",
    updatedBy: "Frank Grinaert",
    updatedOn: "Dec 20, 2023, 9:12 AM",
    publishedBy: "Frank Grinaert",
    publishedOn: "Dec 20, 2023, 9:13 AM",
    status: "published",
  },
  {
    id: 10,
    name: "Changelog styleguide 20231107",
    contentType: "Blok changelog",
    updatedBy: "Frank Grinaert",
    updatedOn: "Nov 7, 2023, 9:39 PM",
    publishedBy: "Frank Grinaert",
    publishedOn: "Nov 7, 2023, 9:40 PM",
    status: "published",
  },
  {
    id: 11,
    name: "Changelog styleguide 20230704",
    contentType: "Blok changelog",
    updatedBy: "Frank Grinaert",
    updatedOn: "Nov 7, 2023, 6:45 PM",
    publishedBy: "Frank Grinaert",
    publishedOn: "Nov 7, 2023, 6:46 PM",
    status: "published",
  },
]

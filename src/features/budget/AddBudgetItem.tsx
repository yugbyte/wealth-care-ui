import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Switch,
  Tag,
  TagCloseButton,
  TagLabel,
  Wrap,
  useToast,
} from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { IoMdAddCircleOutline, IoMdClose, IoMdPricetags } from "react-icons/io";
import { useBudgetCategories } from "./useBudgetCategories";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateBudgetItem } from "./useCreateBudgetItem";
import { FaRegSave } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { useUpdateBudgetItem } from "./useUpdateBudgetItem";

const defaultBudgetItem: BudgetItem = {
  id: "",
  expenseName: "",
  budgetAmount: 0,
  isRecurring: false,
  category: "",
  tags: [],
  icon: "",
};

function AddBudgetItem({
  isOpen,
  onClose,
  budgetItemToEdit = defaultBudgetItem,
}: {
  isOpen: boolean;
  onClose: () => void;
  budgetItemToEdit?: BudgetItem;
}) {
  const isEditSession = budgetItemToEdit.id !== "" ? true : false;
  const [tags, setTags] = useState<string[]>([...budgetItemToEdit.tags]);
  const toast = useToast();
  const {
    isLoading,
    budgetCategories,
  }: { isLoading: boolean; budgetCategories: BudgetCategory[] } =
    useBudgetCategories();

  const [tagsInput, setTagsInput] = useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<BudgetItem>({
    defaultValues: budgetItemToEdit,
  });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTagsInput(event.target.value);
  };

  function handleAddTag(): void {
    if (tags.length > 4) {
      setTagsInput("");
      toast({
        title: "You have reached tags limit",
        description: "Max limit is 4",
        status: "error",
      });
    } else if (tagsInput.length <= 0) {
      toast({
        title: "Invalid tag",
        description: "Cannot be empty",
        status: "error",
      });
    } else {
      const tagsTemp = [...tags, tagsInput];
      setTags(tagsTemp);
      setTagsInput("");
    }
  }

  const handleRemoveTag = (tagName: string): void => {
    setTags(tags.filter((tag) => tag !== tagName));
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleAddTag();
    }
  };

  const handleFormSubmit = (): void => {
    handleSubmit(onSubmitForm)();
  };

  const { isCreating, createBudgetItem } = useCreateBudgetItem();
  const { isUpdating, updateBudgetItem } = useUpdateBudgetItem();

  const onSubmitForm: SubmitHandler<BudgetItemBase> = (data) => {
    console.log(data);
    data.tags = tags;
    if (isEditSession) {
      updateBudgetItem(
        { budgetItem: data, id: budgetItemToEdit.id },
        {
          onSuccess() {
            toast({
              title: "Entry Updated",
              description: "Entry Updated Successfully",
              status: "success",
            });
            closeAndResetForm();
          },
          onError(err) {
            toast({
              title: "Failed to Update Entry",
              description: err.message,
              status: "error",
            });
          },
        }
      );
    } else {
      createBudgetItem(data, {
        onSuccess() {
          toast({
            title: "Entry Added",
            description: "Entry Added Successfully",
            status: "success",
          });
          closeAndResetForm();
        },
        onError(err) {
          toast({
            title: "Failed to Add Entry",
            description: err.message,
            status: "error",
          });
        },
      });
    }
  };

  function closeAndResetForm() {
    if (!isEditSession) setTags([]);
    setTagsInput("");
    reset();
    onClose();
  }

  return (
    <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <form>
          <ModalHeader>
            {isEditSession ? "Edit " : "Add New "}Expense Item
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack height="100%">
              <FormControl isInvalid={errors.expenseName ? true : false}>
                <FormLabel>Expense Name</FormLabel>
                <Input
                  placeholder="Expense name"
                  focusBorderColor="brandLight.500"
                  {...register("expenseName", {
                    required: "Expense Name is Required.",
                    maxLength: {
                      value: 20,
                      message: `Expense Name cannot contain more than 20 characters`,
                    },
                    minLength: {
                      value: 3,
                      message: `Expense Name should be atleast 3 characters`,
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.expenseName?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.budgetAmount ? true : false}>
                <FormLabel>Amount</FormLabel>
                <InputGroup>
                  <InputLeftElement>$</InputLeftElement>
                  <Input
                    placeholder="Budget Amount"
                    type="number"
                    focusBorderColor="brandLight.500"
                    {...register("budgetAmount", {
                      required: "Amount is Required",
                      min: {
                        value: 1,
                        message: "Amount should be a minimum of 1",
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.budgetAmount?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.category ? true : false}>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Select option"
                  disabled={isLoading}
                  focusBorderColor="brandLight.500"
                  {...register("category", {
                    required: "Category is Required",
                  })}
                >
                  {budgetCategories?.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <HStack>
                  <FormLabel htmlFor="isRecurring" mb="0">
                    Is Recurring Expense?
                  </FormLabel>
                  <Switch id="isRecurring" {...register("isRecurring")} />
                </HStack>
              </FormControl>
              <FormControl>
                <FormLabel>Tags</FormLabel>
                <HStack>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <IoMdPricetags />
                    </InputLeftElement>
                    <Input
                      placeholder="Tags"
                      focusBorderColor="brandLight.500"
                      value={tagsInput}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyPress}
                    />
                  </InputGroup>
                  <IconButton
                    aria-label="add-tag"
                    icon={<IoMdAddCircleOutline />}
                    backgroundColor="brandLight.900"
                    variant="icon"
                    onClick={handleAddTag}
                  />
                </HStack>
              </FormControl>
              <HStack spacing={4}>
                {tags.map((tag) => (
                  <Tag variant="solid" key={tag}>
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                  </Tag>
                ))}
              </HStack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Wrap>
              <Button
                variant="pill"
                onClick={() => {
                  closeAndResetForm();
                }}
              >
                <Wrap>
                  <IoMdClose />
                  Close
                </Wrap>
              </Button>
              <Button
                variant="pill"
                disabled={isCreating || isUpdating}
                onClick={() => handleFormSubmit()}
              >
                <Wrap>
                  {isEditSession ? <FaRegSave /> : <IoAddCircleOutline />}
                  {isEditSession ? " Save" : " Add"}
                </Wrap>
              </Button>
            </Wrap>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default AddBudgetItem;
